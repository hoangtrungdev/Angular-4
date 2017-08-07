import { query, stagger, animateChild, AnimationTriggerMetadata,trigger,style,state,transition,animate,keyframes } from '@angular/animations'
export const fxArray = [
    trigger('childStag50', [
        transition('* => *', [
            query('.childFx', [
                stagger(50, [
                    animateChild()])], {
                "optional": true,
                "limit": 500
            })])]),
    trigger('childStag', [
        transition('* => *', [
            query('.childFx', [
                stagger(100, [
                    animateChild()])], {
                "optional": true,
                "limit": 500
            })])]),
    trigger('childStag200', [
        transition('* => *', [
            query('.childFx', [
                stagger(200, [
                    animateChild()])], {
                "optional": true,
                "limit": 500
            })])]),
    trigger('childStag300', [
        transition('* => *', [
            query('.childFx', [
                stagger(300, [
                    animateChild()])], {
                "optional": true,
                "limit": 500
            })])]),
    trigger('childStag400', [
        transition('* => *', [
            query('.childFx', [
                stagger(400, [
                    animateChild()])], {
                "optional": true,
                "limit": 500
            })])]),
    trigger('childStag500', [
        transition('* => *', [
            query('.childFx', [
                stagger(500, [
                    animateChild()])], {
                "optional": true,
                "limit": 500
            })])]),
    trigger('2000', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('2000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('2000ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('2000ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('2000ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('2000ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('1500', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('1500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('1500ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('1500ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('1500ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('1500ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('1000', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('1000ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('1000ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('1000ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('1000ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('1000ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('900', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('900ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('900ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('900ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('900ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('900ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('800', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('800ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('800ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('800ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('800ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('800ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('700', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('700ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('700ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('700ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('700ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('700ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('600', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('600ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('600ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('600ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('600ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('600ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('500', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('500ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('500ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('500ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('500ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('500ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('400', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('400ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('400ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('400ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('400ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('400ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('300', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('300ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('300ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('300ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('300ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('300ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('200', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('200ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('200ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('200ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('200ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('200ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))]),
    trigger('100', [
        transition('zoomInUp => void, * => zoomOutUp', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => zoomInUp', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInRight => void, * => zoomOutLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInRight', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInLeft => void, * => zoomOutRight', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => zoomInLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomInDown => void, * => zoomOutDown', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
                style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => zoomInDown', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
                style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
        transition('zoomIn => void, * => zoomOut', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
        transition('* => zoomIn', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('zoomOutUp',
            style({"display":"none"})),
        state('zoomOutRight',
            style({"display":"none"})),
        state('zoomOutLeft',
            style({"display":"none"})),
        state('zoomOutDown',
            style({"display":"none"})),
        state('zoomOut',
            style({"display":"none"})),
        transition('* => slideOutUp', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('slideInUp => void', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => slideInUp', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('slideInRight => void', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => slideInRight', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutRight', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('slideInLeft => void', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => slideInLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('* => slideOutDown', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('slideInDown => void', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
                style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => slideInDown', [
            animate('100ms 0ms linear', keyframes([
                style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
        state('slideOutUp',
            style({"display":"none"})),
        state('slideOutRight',
            style({"display":"none"})),
        state('slideOutLeft',
            style({"display":"none"})),
        state('slideOutDown',
            style({"display":"none"})),
        transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInUpRight', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInUpLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
        transition('* => rotateInDownRight', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
        transition('* => rotateInDownLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        transition('rotateIn => void, * => rotateOut', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
        transition('* => rotateIn', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
                style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
        state('rotateOutUpRight',
            style({"display":"none"})),
        state('rotateOutUpLeft',
            style({"display":"none"})),
        state('rotateOutDownRight',
            style({"display":"none"})),
        state('rotateOutDownLeft',
            style({"display":"none"})),
        state('rotateOut',
            style({"display":"none"})),
        transition('bounceInUp => void, * => bounceOutUp', [
            animate('100ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
        transition('* => bounceInUp', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInRight => void, * => bounceOutLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInRight', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInLeft => void, * => bounceOutRight', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
                style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
        transition('* => bounceInLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
                style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
                style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceInDown => void, * => bounceOutDown', [
            animate('100ms 0ms linear', keyframes([
                style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
                style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
                style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
        transition('* => bounceInDown', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
                style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
                style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
                style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('bounceIn => void, * => bounceOut', [
            animate('100ms 0ms linear', keyframes([
                style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
                style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
        transition('* => bounceIn', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
                style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
                style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
                style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
                style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
                style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
        state('bounceOutUp',
            style({"display":"none"})),
        state('bounceOutRight',
            style({"display":"none"})),
        state('bounceOutLeft',
            style({"display":"none"})),
        state('bounceOutDown',
            style({"display":"none"})),
        state('bounceOut',
            style({"display":"none"})),
        transition('fadeInUp => void, * => fadeOutUp', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
        transition('* => fadeInUp', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInRight => void, * => fadeOutLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInRight', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInLeft => void, * => fadeOutRight', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
        transition('* => fadeInLeft', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeInDown => void, * => fadeOutDown', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
                style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
        transition('* => fadeInDown', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
                style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
        transition('fadeIn => void, * => fadeOut', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":1,"offset":0}),
                style({"opacity":0,"offset":1})]))]),
        transition('* => fadeIn', [
            animate('100ms 0ms linear', keyframes([
                style({"opacity":0,"offset":0}),
                style({"opacity":1,"offset":1})]))]),
        state('fadeOutUp',
            style({"display":"none"})),
        state('fadeOutRight',
            style({"display":"none"})),
        state('fadeOutLeft',
            style({"display":"none"})),
        state('fadeOutDown',
            style({"display":"none"})),
        state('fadeOut',
            style({"display":"none"}))])]
