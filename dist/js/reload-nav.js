"use strict";

$('.navigation').find('li.active').parents('li').addClass('active');
$('.navigation').find('li').not('.active').has('ul').children('ul').addClass('hidden-ul');
$('.navigation').find('li').has('ul').children('a').parent('li').addClass('has-ul');