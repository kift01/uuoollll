//versao 2011//
barraUol = {
    f: '',
    c: 'http://click.uol.com.br/?rf=barrageral&u=',
    cid: 'superior',
    init: function() {
        this.css();
        this.getParseJSURL(document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1].src, "_JS", this);
        this.UolBarRefBusca = this._REQUEST_JS['refbusca'] || this._REQUEST_JS['ref'] || '';
        this.config.full = this._REQUEST_JS['full'] || true;
    },

    getParseJSURL: function(src, v, esc) {
        var obj = window;
        if (v) {
            if (esc)
                obj = esc["_REQUEST" + v] = [];
            else
                obj = window["_REQUEST" + v] = [];
        }
        src.replace(/([^=&?]+)=([^&]+)/g, function(match, key, value, a) {
            obj[key] = unescape(value).replace(/\+/g, '%20').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        });
    },

    css: function() {
        document.write('<style>' +
            '.barrauol-bg{background:#363636;border-top:1px solid #5c5c5c;height:29px}.buol2011{width:980px;clear:both;margin-left:auto;margin-right:auto;height:29px;background:#363636;position:relative}.buol2011 ul li{float:left;display:inline-block;height:29px;text-align:left!important}.buol2011 ul,.buol2011 ul li,.buol2011 form{margin:0;padding:0}.buol2011 ul.poll-left{float:left;position:absolute;top:0;left:0}.buol2011 ul.poll-right{float:right;padding-right:12px}.buol2011 ul li a,.buol2011 ul li a:visited{color:#fff;text-decoration:none}.buol2011 ul li a:hover{color:#363636;text-decoration:underline}.buol2011 ul li.logouol img{margin:4px 12px 0 12px!important}.buol2011 ul li.suporte a{font:12px/29px Arial!important;color:#ccc;display:block}.buol2011 ul li.suporte a span{font:12px/29px Arial!important}.buol2011 ul li.assine{margin-right:10px;width:115px}.buol2011 ul li.nassine{margin-right:10px;width:134px}.buol2011 ul li.nassine a span{margin-left:5px;font-weight:bold!important}.buol2011 ul li.assinen{margin-right:10px}.buol2011 ul li.sac{margin-right:10px}.buol2011 ul li.sacn{margin-right:10px;overflow:hidden}.buol2011 ul li.sacn a,.buol2011 ul li.sacn a span{display:block}.buol2011 ul li.canal{padding:0!important}.buol2011 ul li.canal a, .buol2011 ul li.canal a:visited{font:bold 14px/28px Arial!important;display:block;padding:0 5px 1px!important}.buol2011 ul li.canal a:hover{color:#363636;background-color:#fff;text-decoration:none}.buol2011 ul li.canal.last{margin-right:0}\n.buol2011 ul li.busca{margin-right:6px!important;float:right}.buol2011 ul li.busca form{display:block;margin-top:5px!important}.buol2011 ul li.busca span{float:left;margin-left:1px}.buol2011 input{font:11px Arial!important;border:0;vertical-align:top;margin:0!important}.buol2011 input.it{background:url("http://img.uol.com.br/b/buol-search.gif") no-repeat scroll 0 0 #fff;padding:3px 0 0 23px;width:113px;height:16px}.buol2011 input.tb{width:65px;height:19px}#barrauol ul li.canal a:hover,#barrauol_1 ul li.canal a:hover{color:#363636!important}.buol2011 .assine span,.buol2011 .sacn span{display:inline!important}.buol2011 .assine span.skype_pnh_container,.buol2011 .assine span.skype_pnh_container *,.buol2011 .sacn span.skype_pnh_container,.buol2011 .sacn span.skype_pnh_container *{display:none!important}.buol2011 ul li.buol_home-page{display:inline-block;width:25px;height:28px;position:relative}.buol2011 ul li.buol_home-page a,.buol2011 ul li.buol_home-page a:hover{display:block;background-color:none!important}.buol2011 ul li.buol_home-page a i.icone-casa-barraUOL,.buol2011 ul li.buol_home-page a:hover i.icone-casa-barraUOL{background:#363636 url(https://simg.uol.com.br/nocache/sac/img/icone_casa_barraUOL.png) no-repeat center 5px!important;display:block;margin:0 0 0 -5px!important;padding:0 4px!important;width:20px;height:29px}\n.buol2011 ul li.buol_home-page div{cursor:default;background:transparent url(https://simg.uol.com.br/nocache/sac/img/seta-balao.png) no-repeat 152px top;display:none;position:absolute;top:24px;left:-142px;z-index:800}\n.buol2011 ul li.buol_home-page:hover div{display:block}\n.buol2011 ul li.buol_home-page div span{background-color:#fff;border:1px solid #363636;border-top:0;display:block;font-size:11px;width:156px;margin-top:5px;padding:4px 0;text-align:center}#uolBar,.partnerBar{overflow:visible!important;}' +
            '</style>');
    },

    li: function(n, c, l) {
        l = (c.indexOf('gratis') != -1) ? l.replace('creative:barrauol', 'creative:barrauol_' + this.cid) : l;
        return '<li' + (c ? ' class="' + c + '"' : '') + '>' + '<a href="' + this.c + l + '">' + n + '</a></li>';
    },

    config: {
        full: false,
        canais: [{
            label: 'Bate-papo',
            classname: 'bate-papo',
            url: 'http://batepapo.uol.com.br/'
        }, {
            label: 'E-mail',
            classname: 'e-mail',
            url: 'http://email.uol.com.br/'
        }, {
            label: 'BOL',
            classname: 'e-mailgratis',
            url: 'http://clicklogger.rm.uol.com.br/?prd=58&grp=src:13;creative:barrauol;link:email_gratis&msr=Cliques%20de%20Origem:1&oper=11&redir=http://www.bol.uol.com.br/'
        }, {
            label: 'Not&iacute;cias',
            classname: 'noticias',
            url: 'http://noticias.uol.com.br/'
        }, {
            label: 'Esporte',
            classname: 'esporte',
            url: 'http://esporte.uol.com.br/'
        }, {
            label: 'Entretenimento',
            classname: 'entretenimento',
            url: 'http://entretenimento.uol.com.br/'
        }, {
            label: 'Mulher',
            classname: 'mulher',
            url: 'http://mulher.uol.com.br/'
        }, {
            label: 'R&aacute;dio',
            classname: 'radio',
            url: 'http://radio.uol.com.br/'
        }, {
            label: 'TV UOL',
            classname: 'video',
            url: 'http://tvuol.uol.com.br/'
        }, {
            label: 'Shopping',
            classname: 'shopping',
            url: 'http://clicklogger.rm.uol.com.br/shopping/?prd=239&msr=Cliques%20de%20Origem:1&oper=11&nortrk=1&grp=src:13;size:18;chn:103;creative:link_fixo;thm:barra_navegacao&redir=http://shopping.uol.com.br/'
        }]
    },

    barra: function() {
        var f = this.f;
        var c = this.c;
        var h = '';
        var fl = this.config.full;
        this.cid = (f != '') ? 'inferior' : 'superior';
        h += (fl) ? '<div class="barrauol-bg' + ((f != '') ? ' barrauolbg-pos' + f : '') + ' full">' : '';
        h += '<div id="barrauol' + ((f != '') ? '_' + f : '') + '" class="buol2011' + (fl ? '' : ' barrauol-bg') + '">' +
            '<ul class="poll-left">' +
            '<li class="logouol"><a href="' + c + 'http://www.uol.com.br/" target="_top" title="UOL - O melhor conte&uacute;do"><img src="https://simg.uol.com.br/nocache/sac/img/logo-uol-2.png" border="0" alt="UOL - O melhor conte&uacute;do" title="UOL - O melhor conte&uacute;do" /></a></li>' +
            '<li class="suporte assinen"><a href="' + c + 'http://clicklogger.rm.uol.com.br/?prd=1&grp=src:10;creative:barrauol&msr=Cliques%20de%20Origem:1&oper=11&redir=http://assine.uol.com.br/index.htm?eos=yes&promo=117570810&sg=300016192&sa=UOL-barra-assine&promochild=PROMOCOMBIAVSS" target="_top"><strong>Assine</strong>&nbsp;<span>0800 703 3000</span></a></li>' +
            '<li class="suporte sacn"><a href="' + c + 'http://click.uol.com.br/?rf=barrageral&amp;u=https://sac.uol.com.br/">SAC</a></li></ul><ul class="poll-right">';
        for (var j = 0; j < this.config.canais.length; j++) {
            h += this.li(this.config.canais[j].label, 'canal buol_' + this.config.canais[j].classname, this.config.canais[j].url);
        }
        h += '<li class="canal buol_home-page"><a href="http://click.uol.com.br/?rf=home2011-cabecalho-pagina-inicial&u=http://www.uol.com.br/p15"><i class="icone-casa-barraUOL"><!-- icone --></i></a><div><span>Fa&ccedil;a do UOL sua home page</span></div></li>';
        h += '</ul>' +
            '</div><div style="clear: left;"></div>';
        h += (fl) ? '</div>' : '';

        this.f == '' ? this.f = 1 : this.f++;

        return h;
    },

    copyright: function() {
        return '<div id="copyright">&copy; 1996-2014 UOL - O melhor conte&uacute;do. Todos os direitos reservados.</div>';
    }

};

writeUolBar = writeUOLBar = barraUol.write = function() {
    document.write(barraUol.barra());
}

writeCopyright = barraUol.writeCopyright = function() {
    document.write(barraUol.copyright());
}

_IE6BAR = {
    // inicializa a barra
    init: function() {
        // retorna se nao for ie6
        if (!navigator.userAgent.match("MSIE") || parseInt(navigator.userAgent.replace(/.*?compatible; MSIE (\d+).*/, "$1")) > 6)
            return null;
        // retorna se cookie do usuario para nao exibir a barra existir
        if (_IE6BAR.hasCookie())
            return null;
        // define url da barra
        var link = "http://click.uol.com.br/?rf=barraIE6&u=http://tecnologia.uol.com.br/atualize-seu-navegador/",
            // define css da barra
            css_bar = 'html, html body {height:100%;}' +
                '#ie6bar_uol {position:absolute;top:expression(0+((e=document.documentElement.scrollTop)?e:document.body.scrollTop)+\'px\');left:0;width:100%;z-index:99999;height:100%;padding:0 !important;margin:0 !important;}' +
                '#ie6bar_uol div {background:#000 url(\'http://img.bol.com.br/fundo-alerta-ie6.gif\') repeat-x 0 0;height:25px;overflow:hidden;cursor:hand;cursor:pointer;}' +
                '#ie6bar_uol div p {font:normal 12px arial;padding:4px 3px 3px 25px;}' +
                '#ie6bar_uol div p img {position:absolute;top:4px;left:5px;}' +
                '#ie6bar_uol div p a {font-weight:bold;text-decoration:underline;}' +
                '#ie6bar_uol div span {position:absolute;top:5px;right:5px;font:bold 11px verdana;display:block;width:20px;height:20px;text-align:center;}',
            // define html da barra
            html_bar = '<div>' +
                ' <p onclick="window.open(\'' + link + '\');_IE6BAR.close();" onmouseover="this.style.backgroundColor=\'blue\'" onmouseout="this.style.backgroundColor=\'transparent\'"><img src="http://click.uol.com.br/?rf=barra-ie6&u=http://img.uol.com.br/ico.gif" />O <strong>UOL</strong> detectou que seu navegador estÃ¡ desatualizado. Recomendamos que baixe a versÃ£o mais recente para visualizar melhor todo o conteÃºdo. <strong><u>Saiba mais</u></strong></p>' +
                ' <span class="fechar" title="NÃ£o exibir mais essa mensagem" onclick="_IE6BAR.close();">X</a></span>' +
                '</div>',
            // define elemento style
            style_ie6 = document.createElement("style"),
            // define elemento da barra
            bloco_ie6 = document.createElement("div");
        // type no elemento style
        style_ie6.type = "text/css";
        // escreve css no style
        if (style_ie6.styleSheet)
            style_ie6.styleSheet.cssText = css_bar;
        else
            style_ie6.appendChild(document.createTextNode(css_bar));
        // id da barra
        bloco_ie6.id = "ie6bar_uol";
        // insere style no head
        document.getElementsByTagName("head")[0].appendChild(style_ie6);
        // insere a barra no body
        document.body.appendChild(bloco_ie6);
        // se a barra existir escreve o HTML
        if (document.getElementById("ie6bar_uol"))
            var elem = document.getElementById("ie6bar_uol").innerHTML = html_bar;
        // esconde combo da barra do UOL
        //document.getElementById('barrauol').getElementsByTagName('select')[0].style.display='none';
        return true;
    },
    // fecha a barra
    close: function() {
        if (document.getElementById("ie6bar_uol")) {
            // remove elemento da barra
            document.body.removeChild(document.getElementById("ie6bar_uol"));
            // exibe combo da barra
            //document.getElementById('barrauol').getElementsByTagName('select')[0].style.display='block';
            // grava cookie para nÃ£o exibir novamente o aviso
            _IE6BAR.writeCookie();
        }
    },
    // grava cookie da barra para nao exibir
    writeCookie: function() {
        document.cookie = "ie6bar_uol='nao exibir';";
        return true;
    },
    // retorna se existe o cookie da barra
    hasCookie: function() {
        return document.cookie.search("ie6bar_uol='nao exibir'") > -1;
    }
}
var tempOnload = window.onload;
window.onload = function() {
    try {
        tempOnload.call(this);
    } catch (e) {
        // sem onload inicial
    }
    _IE6BAR.init();
}

barraUol.init();

function writeFooterLinks() { document.write('<div id="rodape"><a target="_blank" href="http://sobreuol.noticias.uol.com.br/">Sobre o UOL</a> | <a target="_blank" href="http://assine.uol.com.br/">Planos de assinatura</a> | <a href="https://sac.uol.com.br/inscricao/solicitar_cancelamento.html">Cancelar produtos e serviços</a> | <a href="https://sac.uol.com.br/inscricao/cancela_email_adicional.html">Cancelar adicionais</a><br /><a href="https://sac.uol.com.br/info/cartilha/index.jhtm">Cartilha de segurança</a> | <a href="https://sac.uol.com.br/info/protecao_privacidade/normas_protecao_privacidade.jhtm">Normas de segurança e privacidade</a></div>'); }
function writeDisclaimer() { document.write('<div id="privac">Sua senha é secreta. Nenhum funcionário a serviço do UOL está autorizado a solicitá-la.<br/><a href="http://regras.uol.com.br/" target="_blank" class="under">Regras de uso</a> | <a href="https://sac.uol.com.br/info/protecao_privacidade/politica_anti-spam.jhtm" class="under">Política anti-spam</a> | <a href="http://denuncia.uol.com.br/" target="_blank" class="under">Crimes virtuais: denuncie</a></div>'); }


//EOF
