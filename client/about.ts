import { h, VNode } from 'snabbdom';

import { _ } from './i18n';
import { model } from './main';


export function aboutView(): VNode[] {
    const untitled = [
        _("\Many Thanks to srimethan and Liantichess and Liatomic developers to derive this project."),
    ]
    return [
        h('div.about', [
            h('img.center', { attrs: { src: `${model["asset-url"]}/favicon/static/favicon/favicon.ico` } }),
            h('h1', { attrs: { align: 'center' } }, _('About Liatomic')),
            h('p', _('Liatomic is a free, open-source atomic server derived from Liantichess.')),
            h('p', [
                // TODO Automate the generation of this list
                _("Currently supported games are "),
                h('a', { attrs: { href: 'https://liatomic.herokuapp.com/variants/atomic' } }, 'Racing kings'),
                ", ",
               

            h('hr'),
            h('p', [
                _('To play on Liatomic, you need to have an open and unmarked account on Lichess. '),
                _('Regarding Privacy and Terms of Service, the rules of lichess.org are also applied here. '),
                h('a', { attrs: { href: 'https://lichess.org/privacy' } }, 'Privacy'),
                ", ",
                h('a', { attrs: { href: 'https://lichess.org/terms-of-service' } }, 'ToS'),
            ]),
            h('hr'),
            h('p', untitled.map(paragraph => h('p', paragraph))),
        ]),
    ];
}
