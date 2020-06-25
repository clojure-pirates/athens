goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__60360_60474 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60361_60475 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60360_60474,G__60361_60475) : re_frame.core.reg_fx.call(null,G__60360_60474,G__60361_60475));
var G__60362_60480 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__60363_60481 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60362_60480,G__60363_60481) : re_frame.core.reg_fx.call(null,G__60362_60480,G__60363_60481));
var G__60364_60485 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__60365_60486 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60364_60485,G__60365_60486) : re_frame.core.reg_fx.call(null,G__60364_60485,G__60365_60486));
var G__60366_60487 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60367_60488 = (function (p__60368){
var map__60369 = p__60368;
var map__60369__$1 = (((((!((map__60369 == null))))?(((((map__60369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60369):map__60369);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_60413){
var state_val_60414 = (state_60413[(1)]);
if((state_val_60414 === (7))){
var inst_60380 = (state_60413[(7)]);
var inst_60380__$1 = (state_60413[(2)]);
var inst_60382 = (inst_60380__$1 == null);
var inst_60383 = cljs.core.not(inst_60382);
var state_60413__$1 = (function (){var statearr_60415 = state_60413;
(statearr_60415[(7)] = inst_60380__$1);

return statearr_60415;
})();
if(inst_60383){
var statearr_60416_60491 = state_60413__$1;
(statearr_60416_60491[(1)] = (8));

} else {
var statearr_60417_60492 = state_60413__$1;
(statearr_60417_60492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (1))){
var state_60413__$1 = state_60413;
var G__60418_60493 = method;
var G__60418_60494__$1 = (((G__60418_60493 instanceof cljs.core.Keyword))?G__60418_60493.fqn:null);
switch (G__60418_60494__$1) {
case "post":
var statearr_60419_60496 = state_60413__$1;
(statearr_60419_60496[(1)] = (3));


break;
case "get":
var statearr_60420_60497 = state_60413__$1;
(statearr_60420_60497[(1)] = (4));


break;
case "put":
var statearr_60421_60498 = state_60413__$1;
(statearr_60421_60498[(1)] = (5));


break;
case "delete":
var statearr_60422_60499 = state_60413__$1;
(statearr_60422_60499[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60418_60494__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (4))){
var state_60413__$1 = state_60413;
var statearr_60423_60500 = state_60413__$1;
(statearr_60423_60500[(2)] = cljs_http.client.get);

(statearr_60423_60500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (15))){
var inst_60380 = (state_60413[(7)]);
var state_60413__$1 = state_60413;
var statearr_60424_60502 = state_60413__$1;
(statearr_60424_60502[(2)] = inst_60380);

(statearr_60424_60502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (13))){
var inst_60393 = (state_60413[(2)]);
var state_60413__$1 = state_60413;
var statearr_60425_60503 = state_60413__$1;
(statearr_60425_60503[(2)] = inst_60393);

(statearr_60425_60503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (6))){
var state_60413__$1 = state_60413;
var statearr_60426_60504 = state_60413__$1;
(statearr_60426_60504[(2)] = cljs_http.client.delete$);

(statearr_60426_60504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (17))){
var inst_60403 = (state_60413[(8)]);
var inst_60405 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60403);
var inst_60406 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60405) : re_frame.core.dispatch.call(null,inst_60405));
var state_60413__$1 = state_60413;
var statearr_60428_60508 = state_60413__$1;
(statearr_60428_60508[(2)] = inst_60406);

(statearr_60428_60508[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (3))){
var state_60413__$1 = state_60413;
var statearr_60429_60509 = state_60413__$1;
(statearr_60429_60509[(2)] = cljs_http.client.post);

(statearr_60429_60509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (12))){
var state_60413__$1 = state_60413;
var statearr_60430_60510 = state_60413__$1;
(statearr_60430_60510[(2)] = false);

(statearr_60430_60510[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (2))){
var inst_60377 = (state_60413[(2)]);
var inst_60378 = (inst_60377.cljs$core$IFn$_invoke$arity$2 ? inst_60377.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60377.call(null,url,opts));
var state_60413__$1 = state_60413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60413__$1,(7),inst_60378);
} else {
if((state_val_60414 === (19))){
var inst_60411 = (state_60413[(2)]);
var state_60413__$1 = state_60413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60413__$1,inst_60411);
} else {
if((state_val_60414 === (11))){
var state_60413__$1 = state_60413;
var statearr_60431_60517 = state_60413__$1;
(statearr_60431_60517[(2)] = true);

(statearr_60431_60517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (9))){
var state_60413__$1 = state_60413;
var statearr_60434_60518 = state_60413__$1;
(statearr_60434_60518[(2)] = false);

(statearr_60434_60518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (5))){
var state_60413__$1 = state_60413;
var statearr_60435_60524 = state_60413__$1;
(statearr_60435_60524[(2)] = cljs_http.client.put);

(statearr_60435_60524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (14))){
var inst_60380 = (state_60413[(7)]);
var inst_60398 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60380);
var state_60413__$1 = state_60413;
var statearr_60436_60526 = state_60413__$1;
(statearr_60436_60526[(2)] = inst_60398);

(statearr_60436_60526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (16))){
var inst_60401 = (state_60413[(9)]);
var inst_60401__$1 = (state_60413[(2)]);
var inst_60402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60401__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60401__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60413__$1 = (function (){var statearr_60437 = state_60413;
(statearr_60437[(8)] = inst_60403);

(statearr_60437[(9)] = inst_60401__$1);

return statearr_60437;
})();
if(cljs.core.truth_(inst_60402)){
var statearr_60438_60527 = state_60413__$1;
(statearr_60438_60527[(1)] = (17));

} else {
var statearr_60440_60528 = state_60413__$1;
(statearr_60440_60528[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (10))){
var inst_60396 = (state_60413[(2)]);
var state_60413__$1 = state_60413;
if(cljs.core.truth_(inst_60396)){
var statearr_60441_60529 = state_60413__$1;
(statearr_60441_60529[(1)] = (14));

} else {
var statearr_60442_60530 = state_60413__$1;
(statearr_60442_60530[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (18))){
var inst_60401 = (state_60413[(9)]);
var inst_60408 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60401);
var inst_60409 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60408) : re_frame.core.dispatch.call(null,inst_60408));
var state_60413__$1 = state_60413;
var statearr_60443_60531 = state_60413__$1;
(statearr_60443_60531[(2)] = inst_60409);

(statearr_60443_60531[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60414 === (8))){
var inst_60380 = (state_60413[(7)]);
var inst_60385 = inst_60380.cljs$lang$protocol_mask$partition0$;
var inst_60386 = (inst_60385 & (64));
var inst_60387 = inst_60380.cljs$core$ISeq$;
var inst_60388 = (cljs.core.PROTOCOL_SENTINEL === inst_60387);
var inst_60389 = ((inst_60386) || (inst_60388));
var state_60413__$1 = state_60413;
if(cljs.core.truth_(inst_60389)){
var statearr_60448_60533 = state_60413__$1;
(statearr_60448_60533[(1)] = (11));

} else {
var statearr_60449_60534 = state_60413__$1;
(statearr_60449_60534[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__34207__auto__ = null;
var athens$effects$state_machine__34207__auto____0 = (function (){
var statearr_60451 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60451[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_60451[(1)] = (1));

return statearr_60451;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_60413){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_60413);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e60456){if((e60456 instanceof Object)){
var ex__34210__auto__ = e60456;
var statearr_60457_60535 = state_60413;
(statearr_60457_60535[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60536 = state_60413;
state_60413 = G__60536;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_60413){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_60413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_60462 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_60462[(6)] = c__34274__auto__);

return statearr_60462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60366_60487,G__60367_60488) : re_frame.core.reg_fx.call(null,G__60366_60487,G__60367_60488));
var G__60467_60537 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60468_60538 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60469){
var map__60470 = p__60469;
var map__60470__$1 = (((((!((map__60470 == null))))?(((((map__60470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60470):map__60470);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60470__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60470__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60470__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60470__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60473 = action;
var G__60473__$1 = (((G__60473 instanceof cljs.core.Keyword))?G__60473.fqn:null);
switch (G__60473__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60473__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60467_60537,G__60468_60538) : re_frame.core.reg_fx.call(null,G__60467_60537,G__60468_60538));

//# sourceMappingURL=athens.effects.js.map