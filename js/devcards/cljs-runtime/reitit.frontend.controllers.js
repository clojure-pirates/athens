goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50189,match){
var map__50190 = p__50189;
var map__50190__$1 = (((((!((map__50190 == null))))?(((((map__50190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50190):map__50190);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50192(s__50193){
return (new cljs.core.LazySeq(null,(function (){
var s__50193__$1 = s__50193;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50193__$1);
if(temp__5735__auto__){
var s__50193__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50193__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50193__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50195 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50194 = (0);
while(true){
if((i__50194 < size__4581__auto__)){
var vec__50196 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50194);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50196,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50196,(1),null);
cljs.core.chunk_append(b__50195,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50214 = (i__50194 + (1));
i__50194 = G__50214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50195),reitit$frontend$controllers$get_identity_$_iter__50192(cljs.core.chunk_rest(s__50193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50195),null);
}
} else {
var vec__50199 = cljs.core.first(s__50193__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50199,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50199,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50192(cljs.core.rest(s__50193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__50202 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50202) : f.call(null,G__50202));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__50204_50215 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50205_50216 = null;
var count__50206_50217 = (0);
var i__50207_50218 = (0);
while(true){
if((i__50207_50218 < count__50206_50217)){
var controller_50219 = chunk__50205_50216.cljs$core$IIndexed$_nth$arity$2(null,i__50207_50218);
reitit.frontend.controllers.apply_controller(controller_50219,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50220 = seq__50204_50215;
var G__50221 = chunk__50205_50216;
var G__50222 = count__50206_50217;
var G__50223 = (i__50207_50218 + (1));
seq__50204_50215 = G__50220;
chunk__50205_50216 = G__50221;
count__50206_50217 = G__50222;
i__50207_50218 = G__50223;
continue;
} else {
var temp__5735__auto___50224 = cljs.core.seq(seq__50204_50215);
if(temp__5735__auto___50224){
var seq__50204_50225__$1 = temp__5735__auto___50224;
if(cljs.core.chunked_seq_QMARK_(seq__50204_50225__$1)){
var c__4609__auto___50227 = cljs.core.chunk_first(seq__50204_50225__$1);
var G__50228 = cljs.core.chunk_rest(seq__50204_50225__$1);
var G__50229 = c__4609__auto___50227;
var G__50230 = cljs.core.count(c__4609__auto___50227);
var G__50231 = (0);
seq__50204_50215 = G__50228;
chunk__50205_50216 = G__50229;
count__50206_50217 = G__50230;
i__50207_50218 = G__50231;
continue;
} else {
var controller_50232 = cljs.core.first(seq__50204_50225__$1);
reitit.frontend.controllers.apply_controller(controller_50232,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50233 = cljs.core.next(seq__50204_50225__$1);
var G__50234 = null;
var G__50235 = (0);
var G__50236 = (0);
seq__50204_50215 = G__50233;
chunk__50205_50216 = G__50234;
count__50206_50217 = G__50235;
i__50207_50218 = G__50236;
continue;
}
} else {
}
}
break;
}

var seq__50210_50238 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50211_50239 = null;
var count__50212_50240 = (0);
var i__50213_50241 = (0);
while(true){
if((i__50213_50241 < count__50212_50240)){
var controller_50243 = chunk__50211_50239.cljs$core$IIndexed$_nth$arity$2(null,i__50213_50241);
reitit.frontend.controllers.apply_controller(controller_50243,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50244 = seq__50210_50238;
var G__50245 = chunk__50211_50239;
var G__50246 = count__50212_50240;
var G__50247 = (i__50213_50241 + (1));
seq__50210_50238 = G__50244;
chunk__50211_50239 = G__50245;
count__50212_50240 = G__50246;
i__50213_50241 = G__50247;
continue;
} else {
var temp__5735__auto___50248 = cljs.core.seq(seq__50210_50238);
if(temp__5735__auto___50248){
var seq__50210_50249__$1 = temp__5735__auto___50248;
if(cljs.core.chunked_seq_QMARK_(seq__50210_50249__$1)){
var c__4609__auto___50250 = cljs.core.chunk_first(seq__50210_50249__$1);
var G__50251 = cljs.core.chunk_rest(seq__50210_50249__$1);
var G__50252 = c__4609__auto___50250;
var G__50253 = cljs.core.count(c__4609__auto___50250);
var G__50254 = (0);
seq__50210_50238 = G__50251;
chunk__50211_50239 = G__50252;
count__50212_50240 = G__50253;
i__50213_50241 = G__50254;
continue;
} else {
var controller_50255 = cljs.core.first(seq__50210_50249__$1);
reitit.frontend.controllers.apply_controller(controller_50255,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50256 = cljs.core.next(seq__50210_50249__$1);
var G__50257 = null;
var G__50258 = (0);
var G__50259 = (0);
seq__50210_50238 = G__50256;
chunk__50211_50239 = G__50257;
count__50212_50240 = G__50258;
i__50213_50241 = G__50259;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
